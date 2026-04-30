import uuid
from typing import List, Dict, Any
from datetime import datetime

class OrderProcessor:
    """Handles lifecycle of retail orders from e-commerce and POS systems."""
    
    def __init__(self):
        self.orders = []

    def create_order(self, customer_id: str, items: List[Dict], source: str = "WEB") -> Dict:
        order_id = str(uuid.uuid4())
        total = sum(item["price"] * item["quantity"] for item in items)
        
        order = {
            "id": order_id,
            "customer_id": customer_id,
            "items": items,
            "total": total,
            "source": source,
            "status": "PROCESSING",
            "created_at": datetime.utcnow().isoformat()
        }
        self.orders.append(order)
        return order

class InventoryManager:
    """Manages product stock levels and replenishment triggers."""
    
    def __init__(self):
        self.stock = {}

    def update_stock(self, product_id: str, quantity_change: int):
        current_stock = self.stock.get(product_id, 0)
        self.stock[product_id] = current_stock + quantity_change
        return self.stock[product_id]

    def check_low_stock(self, threshold: int = 10) -> List[str]:
        return [pid for pid, qty in self.stock.items() if qty < threshold]

class POSSystem:
    """Simulates physical Point of Sale terminal operations."""
    
    def __init__(self, store_id: str):
        self.store_id = store_id
        self.processor = OrderProcessor()

    def process_checkout(self, items: List[Dict]) -> Dict:
        # Simulate local POS logic before syncing to cloud
        return self.processor.create_order(
            customer_id="WALK_IN",
            items=items,
            source=f"STORE_{self.store_id}"
        )

class CustomerService:
    """Manages customer profiles and loyalty data."""
    
    def get_profile(self, customer_id: str) -> Dict:
        return {
            "id": customer_id,
            "name": "Retail Shopper",
            "tier": "GOLD",
            "points": 1250
        }

if __name__ == "__main__":
    om = OrderProcessor()
    im = InventoryManager()
    im.update_stock("prod-123", 100)
    
    order = om.create_order("cust-99", [{"id": "prod-123", "price": 49.99, "quantity": 2}])
    print(f"Order Created: {order['id']} Total: {order['total']}")
    
    im.update_stock("prod-123", -2)
    print(f"Stock for prod-123: {im.stock['prod-123']}")
