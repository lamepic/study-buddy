import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/Layout/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <main className="grid place-items-center h-4/5">
        <div className="mt-5">
          <div className="flex flex-col md:flex-row items-center w-11/12 justify-around gap-10">
            <div>
              <Image
                src="/assets/learning.gif"
                alt="landing-page"
                width={300}
                height={300}
                unoptimized
              />
            </div>
            <div className="flex flex-col items-center space-y-5 ">
              <div className="text-center">
                <h1 className="text-4xl font-bold">
                  Your ultimate study companion
                </h1>
                <p className="text-slate-500">
                  a fun effective way to study and get organized
                </p>
              </div>
              <Button
                className="w-8/12 mx-auto uppercase py-6 rounded-xl"
                asChild
              >
                <Link href="/auth/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
