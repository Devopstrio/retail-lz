from fastapi import APIRouter
router = APIRouter()
@router.get('/summary')
def get_summary():
    return {'total_revenue': 125000, 'order_count': 1284, 'avg_order_value': 97.35, 'conversion_rate': 4.2}
