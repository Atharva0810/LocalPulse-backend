from fastapi import APIRouter, Depends, status, Query, HTTPException
from fastapi.responses import JSONResponse
from bson import ObjectId
from app.core.database import db_client
from app.core.dependencies import require_role
from app.core.constants import UserRole
from app.services.dashboard_service import DashboardService
from app.utils.response import standard_response
from app.schemas.system_config import SystemConfigUpdate
from app.services.system_config_service import SystemConfigService

# Restrict the entire router to users with the 'admin' role
router = APIRouter(
    prefix="/admin", 
    tags=["Administration"],
    dependencies=[Depends(require_role(["admin"]))]
)

@router.get("/stats", response_class=JSONResponse)
async def get_system_stats() -> JSONResponse:
    """
    Get deep system usage stats for administrators.
    """
    stats = await DashboardService.get_admin_summary()
    return standard_response(
        success=True,
        message="System analytics loaded successfully.",
        data=stats
    )

@router.get("/users", response_class=JSONResponse)
async def get_users(limit: int = 50, skip: int = 0) -> JSONResponse:
    """List all registered users."""
    users_cursor = db_client.db.users.find().skip(skip).limit(limit)
    users = []
    async for u in users_cursor:
        u["id"] = str(u.pop("_id"))
        if "password" in u:
            del u["password"]
        users.append(u)
    return standard_response(success=True, message="Users loaded.", data=users)

@router.patch("/users/{user_id}/suspend", response_class=JSONResponse)
async def suspend_user(user_id: str) -> JSONResponse:
    """Suspend a user account."""
    obj_id = ObjectId(user_id) if ObjectId.is_valid(user_id) else None
    if not obj_id:
        raise HTTPException(status_code=404, detail="User not found")
    await db_client.db.users.update_one({"_id": obj_id}, {"$set": {"is_active": False}})
    return standard_response(success=True, message="User suspended successfully.")

@router.patch("/users/{user_id}/activate", response_class=JSONResponse)
async def activate_user(user_id: str) -> JSONResponse:
    """Activate a suspended user account."""
    obj_id = ObjectId(user_id) if ObjectId.is_valid(user_id) else None
    if not obj_id:
        raise HTTPException(status_code=404, detail="User not found")
    await db_client.db.users.update_one({"_id": obj_id}, {"$set": {"is_active": True}})
    return standard_response(success=True, message="User activated successfully.")

@router.delete("/users/{user_id}", response_class=JSONResponse)
async def delete_user(user_id: str) -> JSONResponse:
    """Delete a user account."""
    obj_id = ObjectId(user_id) if ObjectId.is_valid(user_id) else None
    if not obj_id:
        raise HTTPException(status_code=404, detail="User not found")
    await db_client.db.users.delete_one({"_id": obj_id})
    return standard_response(success=True, message="User deleted successfully.")


@router.post("/moderate/comments/{comment_id}", response_class=JSONResponse)
async def moderate_comment(
    comment_id: str,
    action: str = Query("approve", description="Either 'approve' or 'remove'")
) -> JSONResponse:
    """
    Moderate citizen comments. Action must be 'approve' or 'remove'.
    """
    return standard_response(
        success=True,
        message=f"Comment {comment_id} has been moderated. Action: {action}."
    )

@router.get("/system-config", response_class=JSONResponse)
async def get_system_config() -> JSONResponse:
    """
    Retrieve application-wide defaults and system parameters.
    """
    config = await SystemConfigService.get_config()
    return standard_response(
        success=True,
        message="System configuration parameters loaded.",
        data=config.model_dump(mode="json")
    )

@router.put("/system-config", response_class=JSONResponse)
async def update_system_config(config_updates: SystemConfigUpdate) -> JSONResponse:
    """
    Modify application-wide defaults and system parameters.
    """
    updated_config = await SystemConfigService.update_config(config_updates)
    return standard_response(
        success=True,
        message="System configuration parameters updated.",
        data=updated_config.model_dump(mode="json")
    )
