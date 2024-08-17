import PersonImage from "@/components/photo/PersonImage";
import Socials from "@/components/socials/Socials";
import Stats from "@/components/stats/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">Hello I&apos;m <br /> <span className="text-accent">Vimal Panara</span> </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              C# Developer | API Optimization & Microservice Enthusiast | Database Management | IIT Gandhinagar Alumnus
            </p>
            {/* social media and resume btn */}
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <Button variant="outline">
                <span className="px-2">Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div>
                <Socials />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <PersonImage />
          </div>
        </div>

        {/* Dynamic and highly skilled Software Engineer with extensive experience in backend development, particularly with .NET technologies. Proficient in developing scalable and high-performance web applications using .NET, Entity Framework, and SQL Server. Proven ability to streamline processes and enhance system reliability through innovative solutions and effective collaboration with cross-functional teams. */}

        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
}
