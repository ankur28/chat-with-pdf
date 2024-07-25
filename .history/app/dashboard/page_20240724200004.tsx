import Documents from "@/components/Documents"

//This means this page will be ssr
export const dynamic = "force-dynamic"

function Dashboard() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 dark:bg-black text-white
      <Documents />
    </div>
  )
}

export default Dashboard
