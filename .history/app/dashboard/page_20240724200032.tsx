import Documents from "@/components/Documents"

//This means this page will be ssr
export const dynamic = "force-dynamic"

function Dashboard() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 dark:bg-gra  bg-gray-100 font-extralight text-indigo-600">My Documents</h1>
    
      <Documents />
    </div>
  )
}

export default Dashboard
