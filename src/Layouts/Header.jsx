import React from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import { food, user } from '../assets/icons'

const navLinks = [
    { href: '/', label: 'Shop' },
    { href: '/product', label: 'Build your bundle' },
    { href: '/about', label: 'About us' },
];

const Header = () => {
    const currentPath = window.location.pathname;

    return (
        <nav className={`container flex items-center justify-between !py-4 !px-10 gap-10 ${currentPath === '/' ? 'bg-yellow' : 'bg-orange text-white'}`}>
            <a href="#">
                <span className="font-bold text-4xl items-center">CRAVIES</span>
            </a>
            <ul className='flex flex-1 font-grotesk font-bold text-[16px] leading-[20px] tracking-normal align-middle gap-8 max-md:hidden'>
                {navLinks.map(link => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className={currentPath === link.href ?  currentPath === '/' ? 'border-b-2 border-black !pb-1' : 'border-b-2 border-white !pb-1' : ''}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex gap-6">
                <Button text='suscribe now' className={' max-md:hidden'}/>
                <Icon icon={user} className={' max-md:hidden'} />
                <Icon icon={food} indicator='1' />
                <Button text='Menu' className={' md:hidden'}/>
            </div>
        </nav>
    )
}

export default Header