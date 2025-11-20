interface ProjectCardProps{
    imgLink: string;
    title: string;
    description: string;
}

export default function ProjectCard({imgLink, title, description}: ProjectCardProps) {
    return (
        <div className={"h-80 w-80 bg-[#f5f4f2] rounded-2xl text-black hover:scale-115 transition-all "}>
            <img src={imgLink} alt="ToolBox.ai screenshot" className={"object-cover rounded-t-xl"}/>

            <div className={"flex flex-col justify-start items-center text-wrap"}>
                <h4 className={"text-xl font-medium "}>{title}</h4>
                <p className={"text-sm font-normal p-2 pl-6 pr-6"}>{description}</p>
            </div>

        </div>
    )
}