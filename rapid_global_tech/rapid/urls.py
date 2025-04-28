"""
URL configuration for rapid_global_tech project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name="home"),
    path('about/', views.about, name="about"),
    # Products
    path('ai_integrated_crm_platform/', views.ai_integrated_crm_platform, name="ai_integrated_crm_platform"),
    path('auto_parts_aftermarket/', views.auto_parts_aftermarket, name="auto_parts_aftermarket"),
    path('cloud_erp_for_auto_parts_trading/', views.cloud_erp_for_auto_parts_trading, name="cloud_erp_for_auto_parts_trading"),
    path('data_driven_enterprises/', views.data_driven_enterprises, name="data_driven_enterprises"),
    path('distributor_management_application/', views.distributor_management_application, name="distributor_management_application"),
    path('export_import_and_logistics/', views.export_import_and_logistics, name="export_import_and_logistics"),
    path('retail_and_e_commerce/', views.retail_and_e_commerce, name="retail_and_e_commerce"),
    path('retail_autoparts_desktop_app/', views.retail_autoparts_desktop_app, name="retail_autoparts_desktop_app"),
    path('sme_automatio_and_saas_enablement/', views.sme_automatio_and_saas_enablement, name="sme_automatio_and_saas_enablement"),
    path('web_based_inventory_and_pricing_portal/', views.web_based_inventory_and_pricing_portal, name="web_based_inventory_and_pricing_portal"),


    # services
    path('ai_enabled_crm_automation/', views.ai_enabled_crm_automation, name="ai_enabled_crm_automation"),
    path('ai_forecasting_tools/', views.ai_forecasting_tools, name="ai_forecasting_tools"),
    path('ai_powered_erp_platform/', views.ai_powered_erp_platform, name="ai_powered_erp_platform"),
    path('best_price_engine_setup/', views.best_price_engine_setup, name="best_price_engine_setup"),
    path('bookkeeping_and_financial_analysis/', views.bookkeeping_and_financial_analysis, name="bookkeeping_and_financial_analysis"),
    path('campaign_planning_and_execution/', views.campaign_planning_and_execution, name="campaign_planning_and_execution"),
    path('customer_segmentation/', views.customer_segmentation, name="customer_segmentation"),
    path('dedicated_full_time_employees/', views.dedicated_full_time_employees, name="dedicated_full_time_employees"),
    path('excel_to_web_conversions/', views.excel_to_web_conversions, name="excel_to_web_conversions"),
    path('flask_django_custom_web_apps/', views.flask_django_custom_web_apps, name="flask_django_custom_web_apps"),
    path('freelance_project_support/', views.freelance_project_support, name="freelance_project_support"),
    path('inventory_analysis_and_optimization/', views.inventory_analysis_and_optimization, name="inventory_analysis_and_optimization"),
    path('invoicing_and_export_documentation/', views.invoicing_and_export_documentation, name="invoicing_and_export_documentation"),
    path('logistic_coordination_and_tracking/', views.logistic_coordination_and_tracking, name="logistic_coordination_and_tracking"),
    path('market_entry_support/', views.market_entry_support, name="market_entry_support"),
    path('monthly_reporting_dashboards/', views.monthly_reporting_dashboards, name="monthly_reporting_dashboards"),
    path('offshore_office_setup/', views.offshore_office_setup, name="offshore_office_setup"),
    path('pricing_strategy_and_market_research/', views.pricing_strategy_and_market_research, name="pricing_strategy_and_market_research"),
    path('process_automation_bots/', views.process_automation_bots, name="process_automation_bots"),
    path('procurement_admin_and_po_management/', views.procurement_admin_and_po_management, name="procurement_admin_and_po_management"),
    path('profitability_analysis/', views.profitability_analysis, name="profitability_analysis"),
    path('python_based_task_automation/', views.python_based_task_automation, name="python_based_task_automation"),
    path('sales_and_margin_analytics/', views.sales_and_margin_analytics, name="sales_and_margin_analytics"),
    path('shared_employees/', views.shared_employees, name="shared_employees"),
    path('supplier_negotiation_and_sourcing/', views.supplier_negotiation_and_sourcing, name="supplier_negotiation_and_sourcing"),
    path('supplier_payment_management/', views.supplier_payment_management, name="supplier_payment_management"),
    path('tecdoc_and_cross_reference_services/', views.tecdoc_and_cross_reference_services, name="tecdoc_and_cross_reference_services"),
    path('vat_and_customs_filing_support/', views.vat_and_customs_filing_support, name="vat_and_customs_filing_support"),
    path('virtual_assistant_services/', views.virtual_assistant_services, name="virtual_assistant_services"),
    
]
