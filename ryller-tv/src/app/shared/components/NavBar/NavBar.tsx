import SearchBarForm from "../searchBar/SearchBarForm";
import Button from "../Button/Button";

export default function NavBar() {
    return (
        <header>
            <div className="flex justify-center items-center w-full p-3 bg-mainGray">
                <div className="w-1/6 flex justify-center items-center">
                    <a href={"/"} className="flex justify-center items-center">
                        <img src="/img/logo.png" alt="logo" className="w-10 object-cover rounded-full" />
                        <div className="px-2 md:block hidden font-bold text-xl">
                            Ryller-TV
                        </div>
                    </a>
                </div>
                <div className="mr-5">
                    <a href="">
                        <img src="/img/icons8-futebol-50.png" alt="" />
                    </a>
                     </div>
                     <div>
                       <a href="">
                        <img src="/img/icons8-emoji-de-basquete-48.png" alt="" />
                    </a>  
                     </div>
                   
               
                <div className="w-4/6 flex justify-center items-center">
                    <SearchBarForm />
                </div>
                <div className="w-1/6 mr-2">
                    <Button href="/Login">Login</Button>
                </div>
                <div className="w-1/6 ml-2">
                    <Button href="/Register">Cadastra-se</Button>
                </div>
            </div>
        </header>
    );
}
