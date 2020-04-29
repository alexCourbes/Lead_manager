from rest_framework import routers
from .API import LeadViewSet

router = routers.DefaultRouter()
router.register('API/leads', LeadViewSet, 'leads')

urlpatterns = router.urls