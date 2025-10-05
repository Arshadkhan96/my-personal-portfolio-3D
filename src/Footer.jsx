import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-16 px-6 mt-40'>
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">

                {/* Logo and description */}
                <h2 className='text-3xl bg-gradient-to-r font-bold from-purple-400
                to-purple-200 bg-clip-text text-transparent'>
                    ArshadDev
                </h2>

                {/* Scroll links */}

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-200">
                        Connect
                    </h3>
                    <div className="flex space-x-4">
                        <a className='text-gray-700 hover:text-violet-400 transition-colors' href="https://github.com/Arshadkhan96">
                            <FiGithub className='w-5 h-5'/>
                        </a>

                        <a className='text-gray-700 hover:text-violet-400 transition-colors' href="https://x.com/ArshadKing71266">
                            <FiTwitter className='w-5 h-5'/>
                        </a>

                        <a className='text-gray-700 hover:text-violet-400 transition-colors' href="https://www.linkedin.com/in/arshad-ali-4412732b9/">
                            <FiLinkedin className='w-5 h-5'/>
                        </a> 

                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 flex pt-8 flex-col
             justify-between items-center md:flex-row
            ">
                <p className='text-gray-500 text-sm'>
                    @ 2025 ArshadDev. All rights reserved.
                </p>

                <div className="flex space-x-6 mt-4 md:mt-0 ">
                    <a className='text-gray500 hover:text-white text-sm transition-colors' href="#">
                        Privacy Policy
                    </a>

                    <a className='text-gray500 hover:text-white text-sm transition-colors' href="#">
                        Terms of Service 
                    </a>
                    <a className='text-gray500 hover:text-white text-sm transition-colors' href="#">
                        Cookie Policy
                    </a>
                    
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer
