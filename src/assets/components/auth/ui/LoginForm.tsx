export const LoginForm = () => {
    return (
        <div className="">
            <form method="post" className="flex flex-col gap-3" action="">
                <input type="text" className="p-3 bg-gray-200" />
                <input type="text" className="p-3 bg-gray-200" />
                <input type="submit" className="bg-[#0000FF]" value="Кіру" />
            </form>
        </div>
    )
}