from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'rapid/home.html')


def about(request):
    return render(request, 'rapid/about.html')

# Products Page

def ai_integrated_crm_platform(request):
    return render(request, 'rapid/products/ai_integrated_crm_platform.html')

def auto_parts_aftermarket(request):
    return render(request, 'rapid/products/auto_parts_aftermarket.html')

def cloud_erp_for_auto_parts_trading(request):
    return render(request, 'rapid/products/cloud_erp_for_auto_parts_trading.html')

def data_driven_enterprises(request):
    return render(request, 'rapid/products/data_driven_enterprises.html')

def distributor_management_application(request):
    return render(request, 'rapid/products/distributor_management_application.html')

def export_import_and_logistics(request):
    return render(request, 'rapid/products/export_import_and_logistics.html')

def retail_and_e_commerce(request):
    return render(request, 'rapid/products/retail_and_e_commerce.html')

def retail_autoparts_desktop_app(request):
    return render(request, 'rapid/products/retail_autoparts_desktop_app.html')

def sme_automatio_and_saas_enablement(request):
    return render(request, 'rapid/products/sme_automatio_and_saas_enablement.html')

def web_based_inventory_and_pricing_portal(request):
    return render(request, 'rapid/products/web_based_inventory_and_pricing_portal.html')

# Services pages

def ai_enabled_crm_automation(request):
    return render(request, 'rapid/services/ai_enabled_crm_automation.html')

def ai_forecasting_tools(request):
    return render(request, 'rapid/services/ai_forecasting_tools.html')

def ai_powered_erp_platform(request):
    return render(request, 'rapid/services/ai_powered_erp_platform.html')

def best_price_engine_setup(request):
    return render(request, 'rapid/services/best_price_engine_setup.html')


def bookkeeping_and_financial_analysis(request):
    return render(request, 'rapid/services/bookkeeping_and_financial_analysis.html')

def campaign_planning_and_execution(request):
    return render(request, 'rapid/services/campaign_planning_and_execution.html')

def customer_segmentation(request):
    return render(request, 'rapid/services/customer_segmentation.html')

def dedicated_full_time_employees(request):
    return render(request, 'rapid/services/dedicated_full_time_employees.html')

def excel_to_web_conversions(request):
    return render(request, 'rapid/services/excel_to_web_conversions.html')

def flask_django_custom_web_apps(request):
    return render(request, 'rapid/services/flask_django_custom_web_apps.html')

def freelance_project_support(request):
    return render(request, 'rapid/services/freelance_project_support.html')

def inventory_analysis_and_optimization(request):
    return render(request, 'rapid/services/inventory_analysis_and_optimization.html')

def invoicing_and_export_documentation(request):
    return render(request, 'rapid/services/invoicing_and_export_documentation.html')

def logistic_coordination_and_tracking(request):
    return render(request, 'rapid/services/logistic_coordination_and_tracking.html')

def market_entry_support(request):
    return render(request, 'rapid/services/market_entry_support.html')

def monthly_reporting_dashboards(request):
    return render(request, 'rapid/services/monthly_reporting_dashboards.html')

def offshore_office_setup(request):
    return render(request, 'rapid/services/offshore_office_setup.html')

def pricing_strategy_and_market_research(request):
    return render(request, 'rapid/services/pricing_strategy_and_market_research.html')

def process_automation_bots(request):
    return render(request, 'rapid/services/process_automation_bots.html')

def procurement_admin_and_po_management(request):
    return render(request, 'rapid/services/procurement_admin_and_po_management.html')

def profitability_analysis(request):
    return render(request, 'rapid/services/profitability_analysis.html')

def python_based_task_automation(request):
    return render(request, 'rapid/services/python_based_task_automation.html')

def sales_and_margin_analytics(request):
    return render(request, 'rapid/services/sales_and_margin_analytics.html')

def shared_employees(request):
    return render(request, 'rapid/services/shared_employees.html')

def supplier_negotiation_and_sourcing(request):
    return render(request, 'rapid/services/supplier_negotiation_and_sourcing.html')

def supplier_payment_management(request):
    return render(request, 'rapid/services/supplier_payment_management.html')

def tecdoc_and_cross_reference_services(request):
    return render(request, 'rapid/services/tecdoc_and_cross_reference_services.html')

def vat_and_customs_filing_support(request):
    return render(request, 'rapid/services/vat_and_customs_filing_support.html.html')

def virtual_assistant_services(request):
    return render(request, 'rapid/services/virtual_assistant_services.html')
