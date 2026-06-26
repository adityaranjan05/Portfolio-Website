function SkillItem({ image, name }) {
    return (
        <div className="flex flex-col items-center mx-4 lg:mx-10 shrink-0">
            <img
                src={image}
                alt={name}
                className={`h-14 lg:h-25 object-contain duration-200 hover:scale-115 ${name==="GitHub" || name==="Vercel"?"invert brightness-200":""}`}
            />

            <p className="mt-2 text-lg font-medium text-[#FFFFFF]">
                {name}
            </p>
        </div>
    );
}

export default SkillItem;