import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Sign In | School Management System",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="text-lg font-semibold text-slate-900">School Management System</span>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}