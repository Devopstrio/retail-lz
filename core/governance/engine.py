from typing import List, Dict
from datetime import datetime

class CostAllocator:
    """Allocates cloud and operational costs across retail regions and stores."""
    
    def calculate_allocation(self, total_cost: float, region_weights: Dict[str, float]) -> Dict:
        allocations = {}
        for region, weight in region_weights.items():
            allocations[region] = round(total_cost * weight, 2)
        return allocations

class KPIEngine:
    """Calculates critical retail performance indicators."""
    
    def calculate_conversion_rate(self, sessions: int, orders: int) -> float:
        if sessions == 0: return 0.0
        return round((orders / sessions) * 100, 2)

    def calculate_average_order_value(self, total_revenue: float, order_count: int) -> float:
        if order_count == 0: return 0.0
        return round(total_revenue / order_count, 2)

class IdentityEnforcer:
    """Enforces retail-specific RBAC and Zero Trust patterns."""
    
    ROLES = {
        "STORE_MANAGER": ["VIEW_ORDERS", "VIEW_INVENTORY", "UPDATE_STOCK"],
        "REGIONAL_ADMIN": ["VIEW_ALL_STORES", "VIEW_COSTS", "MANAGE_USERS"],
        "FINANCE_ANALYST": ["VIEW_COSTS", "VIEW_KPI", "GENERATE_REPORTS"]
    }

    def check_permission(self, role: str, action: str) -> bool:
        return action in self.ROLES.get(role, [])
