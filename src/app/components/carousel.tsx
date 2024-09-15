import { ReactIcon, RustIcon, CSSIcon, PostgresIcon, SQLIcon, TauriIcon, GitHubIcon, ElectronIcon } from './svg/icons'; 

const toolIcons: { [key: string]: JSX.Element } = {
    react: <ReactIcon color="#ffffff" size={30} />,
    rust: <RustIcon color="#ffffff" size={30} />,
    css: <CSSIcon color="#ffffff" size={30} />,
    postgres: <PostgresIcon color="#ffffff" size={30} />,
    sql: <SQLIcon color="#ffffff" size={30} />,
    tauri: <TauriIcon color="#ffffff" size={30} />,
    github: <GitHubIcon color="#ffffff" size={30} />,
    electron: <ElectronIcon color="#ffffff" size={30} />,
};

function ProjectTools({ tools }: { tools: Array<string> }) {
    return (
            tools.map((tool, index) => {
                const lowerTool = tool.toLowerCase();
                const Icon = toolIcons[lowerTool];
                return Icon ? <span key={index}>{Icon}</span> : null;
            })
    );
}


export default function Project({ src, tools, details,  tittle, seleted, selectCarousel }: { src: string, tools: Array<string>, details:string,  tittle: string, seleted: string, selectCarousel: (project: string) => void }) {

    return (
        <div className={`border-2 ${seleted === tittle ? 'neon' : 'border-gray-500'} 
                          hover:shadow-lg group rounded-2xl cursor-pointer relative
                          transition duration-300
                          z-[2]
                           h-40 sm:h-80 lg:col-span-3`} onClick={() => selectCarousel(tittle)}>
            <img src={src} alt="Project" className="w-full h-full object-cover rounded" />
            <div className='absolute bottom-5 hidden py-5 text-center text-white md:block w-full bg-opacity-70 bg-black'>
                <h5 className="text-xl">{details}</h5>
                <p className='flex text-center justify-center flex-row gap-1 '>
                    {tools.map((tool) => (
                        ProjectTools({ tools: [tool] })
                    ))}
                </p>
            </div>
        </div>
    )
}