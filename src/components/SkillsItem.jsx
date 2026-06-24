function SkillItem({ image, name }) {
    return (
        <div className="flex flex-col items-center mx-4 md:mx-10 flex-shrink-0">
            <img
                src={image}
                alt={name}
                className="h-10 md:h-25 object-contain duration-200 hover:scale-115"
            />

            <p className="mt-2 text-lg font-medium text-[#FFFFFF]">
                {name}
            </p>
        </div>
    );
}

export default SkillItem;