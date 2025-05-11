import { Button } from "@/components/ui/button";
import { getRole } from "@/utils/roles";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  const role = await getRole();

  if (userId && role) {
    redirect(`/${role}`);
  }

  return (
    <div
      className="flex flex-col items-center justify-center h-screen p-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/gub.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative glow circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 opacity-30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[250px] h-[250px] bg-cyan-200 opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="flex-1 flex flex-col items-center justify-center z-10 text-white drop-shadow-xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Welcome to
          <br />
          <span className="text-blue-200 md:text-6xl">GUB Health Care</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg font-light text-gray-100 backdrop-blur-sm bg-black/30 px-6 py-4 rounded-xl">
          Built for students, faculty, and university staff — this platform
          empowers you to manage appointments, access medical records, and
          connect with campus healthcare services securely and efficiently.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          {userId ? (
            <Link href={`/${role}`}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm md:text-base">
                View Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/sign-up">
                <Button className="md:text-base font-light bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                  New Patient
                </Button>
              </Link>

              <Link href="/sign-in">
                <Button
                  variant="outline"
                  className="md:text-base font-light bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                >
                  Login to Account
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>

      <footer className="mt-12 z-10 text-white text-sm text-center opacity-80">
        &copy; 2025 Green University of Bangladesh — GUB Health Care. All rights reserved.
      </footer>
    </div>
  );
}
