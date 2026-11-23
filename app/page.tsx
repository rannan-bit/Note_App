import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-between min-h-screen p-5 m-5 w-full">
      <div className="md:grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-blue-700 text-4xl font-bold">Note Hub</h1>
          <h1 className="text-blue-500 text-xl">Capture your thoughts</h1>
          <p className="my-5 text-gray-500 text-justify text-lg">A note-taking app is a digital application that allows users to create, edit, organize, and store notes for easy access. It helps users record important information, ideas, reminders, tasks, and personal thoughts. Users can create notes, update existing notes, delete unwanted notes, and search for specific information whenever needed. Note-taking apps often provide features such as categorizing notes, adding images, checklists, and synchronizing data across multiple devices. They help users stay organized, improve productivity, and manage information efficiently.</p>
          <Link className="bg-blue-700 w-70 text-white p-2 rounded-xl text-center" href={'/login'}>LET'S START</Link>
        </div>
        <div>
          <Image height={500} width={500} alt="ing" src={'https://i.pinimg.com/originals/13/0e/da/130edae3816e841d3785a276e1fe0fd2.gif'}/>
        </div>
      </div>
    </div>
  );
}
