<template>
    <section class="bg-gray-200" dir="rtl">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                إنشاء حساب
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">بريدك الإلكتروني</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="اسمك@الشركة.com" required>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمة المرور</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required>
                </div>
                <div>
                    <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تأكيد كلمة المرور</label>
                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required>
                </div>
                <div class="flex items-start gap-x-2">
                    <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " :required="true">
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">أوافق على <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">الشروط والأحكام</a></label>
                    </div>
                </div>
                <button type="submit" style="background-color: #5165FD;" class="w-full text-white rounded-lg text-sm px-5 py-2.5 text-center ">إنشاء حساب</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    لديك حساب بالفعل؟ <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">سجل الدخول هنا</a>
                </p>
                </form>
            </div>
            </div>
        </div>
    </section>
</template>
