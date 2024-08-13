import Image from "next/image";

export default function Home() {
  return (
    <main className="md⁚flex min-s-screen rounded-xl items-center justify-between p-91">
      <div><figure className="bg-blue-300 rounded-xl dark:bg-red-5000">
  <img className="w-12 h-12 md:w-32 md:h-auto md:rouvded-none rounded-full mx-left" src="/My-pic.jpg" alt="" width="384" height="512"/>
  <div className="pt-12 md:p-12 text-centre md:text-e space-y-7">
    <blockquote>
      <p className="text-lg font-medium">
        “Hello!I am Mubashir.I am AI student and also interclass student.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-800">
        M.MUNASHIR
      </div>
      <div>
        Staff Engineer, RYK
        <div/><figure className="bg-blue-500"/>
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
