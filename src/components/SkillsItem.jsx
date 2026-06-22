function SkillItem({ image, name }) {
    return (
        <div className="flex flex-col items-center mx-10 flex-shrink-0">
            <img
                src={image}
                alt={name}
                className="h-40 object-contain"
            />

            <p className="mt-2 text-lg font-medium">
                {name}
            </p>
        </div>
    );
}

export default SkillItem;