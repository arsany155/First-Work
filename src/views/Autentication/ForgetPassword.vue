<template>
    <section class="bg-gray-200" dir="rtl">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                هل نسيت كلمة المرور؟
            </h1>
            <p class="font-light text-gray-500 dark:text-gray-400">لا تقلق! فقط اكتب بريدك الإلكتروني وسنقوم بإرسال رمز لإعادة تعيين كلمة المرور!</p>
            <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">بريدك الإلكتروني</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="الاسم@الشركة.com" required>
                </div>
                <div class="flex items-start gap-x-1">
                    <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required>
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">أوافق على <a class="font-medium text-primary-600 hover:underline " href="#">الشروط والأحكام</a></label>
                    </div>
                </div>
                <button type="submit" style="background-color: #5165FD;" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">إعادة تعيين كلمة المرور</button>
            </form>
        </div>
    </div>
</section>

</template>