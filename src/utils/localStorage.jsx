const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          failed: false,
          taskTitle: "Prepare Report",
          taskDescription: "Compile the monthly sales report.",
          date: "2024-12-20",
          category: "Reports"
        },
        {
          active: false,
          newTask: true,
          failed: false,
          taskTitle: "Update Client Database",
          taskDescription: "Ensure client details are up-to-date.",
          date: "2024-12-19",
          category: "Database Management"
        },
        {
          active: true,
          newTask: false,
          failed: true,
          taskTitle: "Fix Bug #112",
          taskDescription: "Resolve UI rendering issue on dashboard.",
          date: "2024-12-18",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          failed: true,
          taskTitle: "Test API Endpoints",
          taskDescription: "Perform testing for API version 2.0.",
          date: "2024-12-17",
          category: "Testing"
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          failed: false,
          taskTitle: "Design Logo",
          taskDescription: "Create a logo for the new product launch.",
          date: "2024-12-21",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          failed: true,
          taskTitle: "Submit Budget Proposal",
          taskDescription: "Draft and submit the 2025 budget proposal.",
          date: "2024-12-16",
          category: "Finance"
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          failed: false,
          taskTitle: "Organize Team Meeting",
          taskDescription: "Schedule a meeting for project updates.",
          date: "2024-12-18",
          category: "Management"
        },
        {
          active: true,
          newTask: false,
          failed: false,
          taskTitle: "Customer Feedback Analysis",
          taskDescription: "Analyze customer feedback surveys.",
          date: "2024-12-20",
          category: "Analysis"
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          failed: false,
          taskTitle: "Social Media Campaign",
          taskDescription: "Launch a campaign for new followers.",
          date: "2024-12-22",
          category: "Marketing"
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          failed: true,
          taskTitle: "Prepare Audit Documents",
          taskDescription: "Gather and organize documents for audit.",
          date: "2024-12-19",
          category: "Audit"
        }
      ]
    }
  ];
  
  const admin = [
    {
      admin: {
        id: 1,
        email: "admin@example.com",
        password: "123"
      }
    }
  ];
export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('employees',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
}