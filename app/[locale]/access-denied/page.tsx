import { Button } from "@/@/components/ui/button";


const page = () => {
	return (
		<div className="min-h-screen p-4 mx-auto flex-col items-center justify-center flex gap-4 py-6">

			<div className="text-primary text-7xl font-black tracking-widest">403</div>
			<h1 className="text-3xl font-bold">Access denied</h1>

			<p>You cannot access the page. Please login again</p>

			<Button className="px-12" variant={"outline"}>Log in</Button>
			
		</div>
	);
};

export default page;