import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
    return (
        <div class=" mx-10 my-20 text-center p-4 my-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700" aria-label="Subscribe to the Flowbite newsletter">
            <h3 class="mb-3 text-3xl font-bold text-gray-900 dark:text-white">Get more updates...</h3>
            <p class="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">Do you want to get notified when a new blog is added to Tele-Up? Sign up for our newsletter and you'll be among the first to find out about new blogs.</p>

            <form class="flex justify-center" method="post" data-sv-form="4692392" data-uid="344e3b5c48" data-format="inline" data-version="5" min-width="400 500 600 700">
                <div class="flex items-end mb-3">

                    <div class="seva-fields formkit-fields flex items-center mb-3 w-full max-w-md">
                        <div class="formkit-field relative w-full mr-3">
                            <label for="member_email" class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input id="member_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email_address" aria-label="Email Address" placeholder="Your email address..." required="" type="email" />
                        </div>
                        <button data-element="submit" class="formkit-submit formkit-submit">

                            <span class="cursor-pointer text-white bg-[#0A72BA] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</span>
                        </button>
                    </div>
                </div>
            </form>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">By subscribing, you agree with Tele-Up's <Link href="https://convertkit.com/terms" class="text-blue-600 hover:underline dark:text-blue-500">Terms of Service</Link> and <Link rel="nofollow" class="text-blue-600 hover:underline dark:text-blue-500" >Privacy Policy</Link>.</div>
        </div>
    );
};

export default Subscribe;