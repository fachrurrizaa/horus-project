import Image from 'next/image';
import hero from '../../../public/assets/loginimg.png';
import Input from './Input';
import Button from '../Button';

export default function SignIn() {
  return (
    <div className="bg-white h-screen w-screen flex items-center mx-11">
      <div className='w-2/4 h-auto'>
        <Image src={hero} width={0} height={0} alt={"logo"} />
      </div>
      <div className='w-[390px] h-[596px] rounded-2xl outline outline-1 outline-neutral-400 ml-20 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-xl text-[#6D0245]'>Welcome Back, Please Login to</h1>
        <h1 className='font-bold text-xl text-[#6D0245]'>Your Account</h1>
        <div className='w-full'>
          <Input type={"email"} label={"Username"} placeholder={"Type your username"} />
          <Input type={"password"} label={"Password"} placeholder={"Type your password"} />
          <Button content={"Login"} />
        </div>
      </div>
    </div>
  )
}
