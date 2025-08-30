import Button from '../components/Button'
import { logo } from '../assets/logo';
import InputText from '../components/InputText';

const Footer = () => {
    return (
        <footer className='container !pb-[10px]'>
            <div className='!m-[10px] !mb-0 w-[calc(100%-20px)] !p-15 max-sm:!py-8 max-sm:!px-4 border-3 border-black rounded-[20px] bg-orange-yellow flex flex-col gap-12 max-sm:!gap-8'>

                <a href="">
                    <img src={logo} alt="logo" className='w-full' />
                </a>
                <div>
                    <Button text={'Follow us on instagram'} className={'max-md:w-full'}/>
                </div>
                <aside className="flex justify-between gap-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-4 flex-wrap">

                    {/* Email Signup Section */}
                    <div className='w-full md:!hidden'>
                        <h3 className="font-wosker font-normal text-[32px] leading-[36px] tracking-normal align-middle uppercase text-orange">
                            OUR EMAILS ARE ALL CEREAL,
                            WITH A BIT OF EMOTIONAL
                            SUPPORT
                        </h3>
                        <InputText placeHolder="Email address" type="email"/>
                    </div>

                    {/* About Us Section */}
                    <div>
                        <h3 className="footer-title">
                            ABOUT US
                        </h3>
                        <div className="text-black text-sm leading-relaxed">
                            <p className="mb-1">We used to eat cereal.</p>
                            <p className="mb-1">Then we became adults. Big mistake.</p>
                            <p className="mb-1">So we fixed cereal. Now everything's fine.</p>
                            <p>Probably.</p>
                        </div>
                    </div>

                    {/* Shop Section */}
                    <div>
                        <h3 className="footer-title">
                            SHOP
                        </h3>
                        <ul className="text-black text-sm flex flex-col gap-4 [&>li>a]:font-grotesk [&>li>a]:font-normal [&>li>a]:text-[16px] [&>li>a]:leading-[24px] [&>li>a]:tracking-normal [&>li>a]:align-middle [&>li>a]:hover:!underline">
                            <li>
                                <a href="#">
                                    Choco Boom
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Peanut Crazy
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Honey Crunch
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Cookie N'Cream
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h3 className="footer-title">
                            HELP
                        </h3>
                        <ul className="text-black text-sm flex flex-col gap-4 [&>li>a]:font-grotesk [&>li>a]:font-normal [&>li>a]:text-[16px] [&>li>a]:leading-[24px] [&>li>a]:tracking-normal [&>li>a]:align-middle [&>li>a]:hover:!underline">
                            <li>
                                <a href="#">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    My subscription
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Email Signup Section */}
                    <div className='w-[480px] max-md:!hidden'>
                        <h3 className="font-wosker font-normal text-[32px] leading-[36px] tracking-normal align-middle uppercase text-orange">
                            OUR EMAILS ARE ALL CEREAL,
                            WITH A BIT OF EMOTIONAL
                            SUPPORT
                        </h3>
                        <InputText placeHolder="Email address" type="email"/>
                    </div>
                </aside>

                <ul className='flex items-center gap-5'>
                    <li><a href="#">Funds</a></li>
                    <li className='flex w-0.5 h-5 bg-black'></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li className='flex w-0.5 h-5 bg-black'></li>
                    <li><a href="#">Legal Info</a></li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer