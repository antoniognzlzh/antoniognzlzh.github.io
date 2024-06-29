const timelineData = [
    { year: "Introduction", content: "Navigate through the timeline to see my professional history.", type: "intro" },
    { year: 2022, title: "Director of Production Planning and Analysis", content: "Covercraft Industries, LLC", type: "work" },
    { year: 2017, title: "Director of Purchasing, Asia Pacific", content: "Covercraft Industries, LLC", type: "work" },
    { year: 2015, title: "Master in Engineering: Productivity and Quality", content: "Tecnologico de Monterrey", type:"education" },
    { year: 2013, title: "Supply Chain Director", content: "ADCO Products, Inc", type: "work" },
    { year: 2012, title: "Supply Chain Manager", content: "Beverly Bay S de RL de CV", type: "work" },
    { year: 2011, title: "Planning Manager", content: "Agile Brands Ltd", type: "work" },
    { year: 2011, title: "Operations Planning Coordinator<br>| Process Improvement Supervisor", content: "Hutchison Ports, Lazaro Cardenas Terminal", type: "work" },
    { year: 2010, title: "B.S. Industrial and Systems Engineering", content: "Tecnologico de Monterrey", type: "education" }
];

const slideshowData = [
    {   
        title: "Summary", 
        content: `<strong>SUMMARY</strong><br>
                  Dynamic and results-oriented Supply Chain and Production Planning Leader with extensive experience in global manufacturing environments. Expertise in end-to-end planning, business intelligence, and data analytics. Proven track record in leading strategic production optimizations, implementing advanced ERP systems (SAP), and leveraging Power BI for transformative insights. Committed to continuous improvement and leveraging technology to drive business decisions and efficiency.<br><br>
                  <strong>TECHNICAL SKILLS</strong><br>
                  Power BI, DAX, M, SQL, Fiori, SAP, CDS, Sharepoint, Office 365, MS Visio, MS Project, Azure, Python, R.<br><br>
                  <strong>SOFT SKILLS</strong><br>
                  Leadership, effective problem solving and decision-making, data analytics, project management, collaboration, delegation.`
    },
    { 
        title: "Director of Production Planning and Analysis", 
        content: `<strong>Covercraft Industries, LLC</strong><br>
                  <em>Nov 2022 - Present</em><br>
                  Lead the production planning and scheduling team, implementing production release programs that optimize inventory, maximize production efficiency, and minimize OTS (Order-To-Ship) times. Manage End-to-End Planning by translating high-level forecasts into comprehensive production plans, ensuring seamless alignment from raw materials to finished goods.<br>
                  ● Direct strategic capacity planning initiatives, conducting weekly reviews with Plant Managers and site leaders to align production schedules with demand forecasts and changes, ensuring the production scheduling team exceeds performance and accountability standards.<br>
                  ● Revitalize inventory management by implementing strategic inventory policies to optimize capital utilization while improving OTD (On-Time-Delivery) and OTS (Order-To-Ship) metrics.<br>
                  ● Lead SAP operational implementation, acting as the Production Planning Business Process Owner. With a deep understanding of internal processes, the Fiori and GUI user experience, SAP functionality, and CDS tables, I optimize data extraction into Azure.<br>
                  ● Leverage SQL and DAX expertise to develop intricate and powerful data models, measures and calculations boosting our analytical reporting capabilities and leading to the creation of advanced Power BI reports that deliver comprehensive insights into operational effectiveness and efficiency.<br>
                  ● Enhance production and inventory strategies, utilizing data-driven insights and analytics to set new benchmarks for operational efficiency and adaptability.`
    },
    { 
        title: "Director of Purchasing, Asia Pacific", 
        content: `<strong>Covercraft Industries, LLC</strong><br>
                  <em>Jan 2017 - Nov 2022</em><br>
                  Led production management in China for distribution to the US and Australia, overseeing the entire supply chain from material sourcing to logistics. Spearheaded the integration and analysis of multiple ERP systems through the development of Power BI reports, transforming the company’s data culture and significantly improving report accuracy and data connectivity. Developed a comprehensive SIOP roadmap, standardizing product groupings and implementing annual operating plans that enhanced cross-departmental collaboration and operational efficiency, leading to improved key performance indicators across multiple global sites.<br>
                  ● Managed end-to-end production processes in China for international distribution, focusing on inventory optimization, quality and cost-efficiency.<br>
                  ● Developed and led a company-wide SIOP roadmap, facilitating monthly cross-departmental reviews to assess key operational and financial indicators, with a focus on OTS (Order-To-Ship) and OTD (On-Time Delivery), streamlining processes and improving delivery metrics.<br>
                  ● Standardized product classifications optimized for the SIOP roadmap and aligned annual operating plans, including capacity and inventory plans across 9 locations in the US, Mexico, and China.<br>
                  ● As a Core member of the Data Analytics team, led the integration and analysis of multiple ERP systems by identifying key tables in diverse ERP databases, writing views in Azure, and enhancing data connectivity and automation through the development and maintenance of a data gateway.<br>
                  ● Designed and implemented Power BI datasets and reports to support daily operational processes and strategic decisions during mergers, acquisitions, and divestitures to private equity firms, showcasing agility and strategic insight.`
    },
    { 
        title: "Master in Engineering with Specialization in Quality Systems and Productivity",
        content: `<strong>Tecnologico de Monterrey</strong><br>
                  <em>May 2015</em><br>`
    },
    { 
        title: "Supply Chain Director", 
        content: `<strong>ADCO Products, Inc</strong><br>
                  <em>Sep 2013 - Jan 2017</em><br>
                  Oversaw comprehensive supply chain operations, orchestrating demand forecasting, production planning, and inventory management for manufacturing operations in China while maintaining inventory oversight in Los Angeles. Led vendor relations, including frequent site inspections and price negotiations, by leveraging detailed cost analyses. Instrumental in integrating advanced data analytics into the supply chain process through the implementation of Power BI, significantly enhancing organizational decision-making and efficiency. Fostered cross-functional collaboration with Sales and Marketing to develop new programs and optimized purchasing plans for peak sale seasons, effectively aligning production capabilities with market demand.<br>
                  ● Utilized comprehensive Bills of Materials and cost data analysis as negotiation tools, achieving favorable pricing agreements and strengthening supplier relationships.<br>
                  ● Established a robust social compliance and QC inspection process with well-defined testing plan and acceptance and rejection criteria, significantly enhancing product quality and compliance.<br>
                  ● Strategically expanded the supplier network to improve price negotiations, increase operational flexibility, and establish redundancy in the supply chain.<br>
                  ● Worked closely with Sales and Marketing to design, quote, and price new programs, ensuring competitive offerings and market responsiveness.<br>
                  ● Lead Power BI adoption for production and sales reporting, transforming data analytics practices and providing deeper insights into operational performance and sales trends.`
    },
    { 
        title: "Supply Chain Manager", 
        content: `<strong>Beverly Bay S de RL de CV</strong><br>
                  <em>Jun 2012 - Sep 2013</em><br>
                  Lead manufacturing source change for outdoor protective products and played a key role in a brand divestiture process. Managed product sourcing and enhanced production flexibility, minimizing supply disruptions across product portfolio.<br>
                  ● Coordinated the strategic relocation of equipment and assets, secured new material sourcing partnerships, and efficiently managed the production ramp-up to meet demand without compromising product availability or portfolio diversity.<br>
                  ● Lead the operations handover and played a crucial role in the divestiture process of a brand and product line that was misaligned with the company’s core portfolio, unlocking shareholder value while enhancing production flexibility and capacity.<br>
                  ● Oversaw the ramp-up of production activities at the new manufacturing site, implementing best practices to achieve optimal production rates swiftly, thereby minimizing supply chain disruptions.<br>
                  ● Established robust partnerships for material sourcing, ensuring quality and availability aligned with production needs during and post-transition.`
    },
    { 
        title: "Planning Manager", 
        content: `<strong>Agile Brands Ltd</strong><br>
                  <em>Dec 2011 - Jun 2012</em><br>
                  Developed comprehensive production capacity plans for backpacks and outdoor protective covers, including necessary headcount assessments. Formulated detailed production schedules, managed production schedules for three plants, and collaborated with raw material buyers to accommodate plan adjustments in response to demand changes.`
    },
    { 
        title: "Operations Planning Coordinator", 
        content: `<strong>Hutchison Ports, Lazaro Cardenas Terminal</strong><br>
                  <em>Apr 2011 - Oct 2011</em><br>
                  Oversaw coordination across marine, railway, and truck planning areas. Enhanced operational efficiencies by revising loading/unloading plans, optimizing floor layout plans, and improving vessel/berth scheduling, among other logistics processes.<br>
                  | Process Improvement Supervisor
                  <em>Jan 2011 - Apr 2011</em><br>
                  Streamlined flatbed vehicle utilization by reducing idle time and optimizing fuel stops and assignments,` 
    },
    {
        title: "B.S. Industrial and Systems Engineering", 
        content: `<strong>Tecnologico de Monterrey</strong><br>
                  <em>Dec 2010</em><br>` 
    },
];

const timeline = document.querySelector('.timeline');
const timelineBar = document.querySelector('.timeline-bar');
const slideshow = document.getElementById('slideshow');

// Function to create slides for the slideshow
function createSlides() {
    slideshowData.forEach((data, index) => {
        // Create a new div element for each slide
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        
        // Set the inner HTML of the slide
        slide.innerHTML = `
            <div>
                <h2>${data.title ? `${data.title}` : ''}</h2> <!-- Only display the title if it exists -->
                <p>${data.content}</p>
            </div>
        `;
        
        // Append the slide to the slideshow container
        slideshow.appendChild(slide);
    });
}

// Function to create the timeline points
function createTimeline() {
    timelineData.forEach((data, index) => {
        // Create a new div element for each timeline point
        const point = document.createElement('div');
        point.className = `timeline-point ${index === 0 ? 'active' : ''}`;
        point.style.left = `${index * (100 / (timelineData.length - 1))}%`;
        point.style.backgroundColor = getColor(data.type);
    
        // Create a content div to display on hover
        const content = document.createElement('div');
        content.className = `timeline-content ${index % 2 === 0 ? 'top' : 'bottom'}`;
        content.innerHTML = `
            <strong>${data.year}</strong><br>
            ${data.title ? `${data.title}<br>` : ''} <!-- Only display the title if it exists -->
            ${data.content.substring(0, 30)}... <!-- Display a snippet of the content -->
        `;
        content.style.left = `${index * (100 / (timelineData.length - 1))}%`;
    
        // Append the content div to the timeline point
        point.appendChild(content);
    
        // Add mouseover event to change slides on hover
        point.addEventListener('mouseover', () => {
            // Remove 'active' class from all timeline points
            document.querySelectorAll('.timeline-point').forEach(p => p.classList.remove('active'));
            point.classList.add('active');
            
            // Toggle the 'active' class for slides based on the hovered index
            document.querySelectorAll('.slide').forEach((s, i) => {
                s.classList.toggle('active', i === index);
            });
        });
    
        // Append the timeline point to the timeline bar
        timelineBar.appendChild(point);
    });
}

// Function to get the color based on the type of event
function getColor(type) {
    if (type === "work") {
        return '#183f69'; // Dark color for work events
    } else if (type === "education") {
        return '#6baed6'; // Light color for education events
    } else {
        return '#CCCCCC'; // Default color for introduction
    }
}

// Call functions to create slides and timeline
createSlides();
createTimeline();