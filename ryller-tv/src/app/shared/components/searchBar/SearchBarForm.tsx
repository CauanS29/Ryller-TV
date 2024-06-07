
export default function SearchBarForm(){

    return(
        <div className="flex justify-center items-center w-full max-w-lg relative">
            <input
            type="text"
            placeholder="Pesquisar"
            className="w-390 h-55 bg-black
            bg-transparent p-2 outline-none border-neutral-100/60 border-[1px]
            rounded-xl"
            />
            
        </div>
    )
}