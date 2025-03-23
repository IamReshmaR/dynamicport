import React from 'react';

const TableauPortfolio: React.FC = () => {
  const dashboards = [
    {
      title: "Employee Retention Dashboard",
      description: "Advanced filtering and LOD calculations to identify turnover patterns across different departments and roles.",
      imageUrl: "https://public.tableau.com/static/images/Re/RetentionDashboard_17149626230140/Dashboard2/1.png",
      liveUrl: "https://public.tableau.com/app/profile/reshma.rajan3751/viz/RetentionDashboard_17149626230140/Dashboard2?publish=yes"
    },
    {
      title: "Product Portfolio Dashboard",
      description: "Comprehensive insights into product performance and market trends with interactive KPIs and metrics.",
      imageUrl: "https://public.tableau.com/static/images/Pr/ProductPortfolioDashboard_17149623844010/ProductDashboard/1.png",
      liveUrl: "https://public.tableau.com/app/profile/reshma.rajan3751/viz/ProductPortfolioDashboard_17149623844010/ProductDashboard?publish=yes"
    },
    {
      title: "Employee Attrition Analysis",
      description: "Detailed analytics of employee attrition patterns using complex LOD expressions for strategic HR planning.",
      imageUrl: "https://public.tableau.com/static/images/em/employee_attrition_17149631779560/EmployeeAttritionAnalysis/1.png",
      liveUrl: "https://public.tableau.com/app/profile/reshma.rajan3751/viz/employee_attrition_17149631779560/EmployeeAttritionAnalysis?publish=yes"
    }
  ];

  return (
    <div className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Tableau Dashboard Portfolio</h2>
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
          Explore my collection of interactive Tableau dashboards, showcasing advanced data visualization 
          techniques and strategic insights across various business domains.
        </p>
        
        <div className="grid grid-cols-1 gap-12">
          {dashboards.map((dashboard, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{dashboard.title}</h3>
                <p className="text-gray-300 mb-6">{dashboard.description}</p>
                
                <div className="aspect-video relative mb-6 group">
                  <img 
                    src={dashboard.imageUrl} 
                    alt={dashboard.title}
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={dashboard.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                      View Interactive Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableauPortfolio; 