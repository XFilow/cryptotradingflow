import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";
import img11 from "./assets/11.jpg";

const HowToInstall = () => {
  return (
    <div className="relative flex min-h-screen pl-3 text-white">
      <div className="flex items-center justify-center w-full prose">
        <ol className="w-full pr-3 md:pl-6">
          {/*  focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg"
           */}

          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 mt-20 text-xl font-bold md:mt-2 md:text-2xl">
              Create a Binance account
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <li className="mb-2">
                You can use our referral link to get 10% trading fees discounts
                lifetime:
                <br />
                <a
                  href="https://accounts.binance.com/register?ref=DWHURPU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden underline hover:font-bold md:block"
                >
                  https://accounts.binance.com/register?ref=DWHURPU7
                </a>
                <a
                  href="https://accounts.binance.com/register?ref=DWHURPU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:font-bold md:hidden"
                >
                  https://accounts.binance.com/
                  <br />
                  register?ref=DWHURPU7
                </a>
              </li>
              <li className="mb-2">
                If you need guidance follow Binance Beginners Guide to help you
                start your account:
                <br />
                <a
                  href="https://academy.binance.com/en/articles/binance-beginner-s-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden underline hover:font-bold md:block"
                >
                  https://academy.binance.com/en/articles/binance-beginner-s-guide
                </a>
                <a
                  href="https://academy.binance.com/en/articles/binance-beginner-s-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:font-bold md:hidden"
                >
                  https://academy.binance.com/en/
                  <br />
                  articles/binance-beginner-s-guide
                </a>
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              Open your Binance Futures account
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <li className="mb-2">
                You will need KYC verification to open your futures account on
                Binance.
                <br />
                <a
                  href="https://www.binance.com/en/futures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:font-bold"
                >
                  https://www.binance.com/en/futures
                </a>
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              Create an API for your Binance account
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <div>
                <img src={img1} className="md:max-w-5xl mt-7 mb-7" />
              </div>

              <li className="mb-2">
                Go to your account page and select the API Management tab
              </li>
              <img src={img2} className="md:max-w-5xl mt-7 mb-7" />
              <li className="mb-2">
                Click on the yellow button that says “Create API”
              </li>
              <li className="mb-2">
                Set a name to your Binance API, for example something like:
                Binance-Futures-API
              </li>
              <img src={img3} className="md:max-w-5xl mt-7 mb-7" />
              <li className="mb-2">
                The API edit screen will appear with all boxes unchecked except
                the Enable Reading
              </li>
              <li className="mb-2">
                <span className="font-bold">
                  Save your API Key and your Secret Key
                </span>
                , you'll need them later!
              </li>
              <li className="mb-2">Click on Edit restrictions </li>
              <img src={img4} className="md:max-w-5xl mt-7 mb-7" />
              <li className="mb-2">
                Select the option “Restrict access to trusted IPs only
                (Recommended)”
              </li>
              <li className="mb-2">
                You’ll have to type the following IP addresses (Copy & paste the
                IPs below):
                <br /> 18.192.238.182, 3.72.69.97, 3.73.237.113, 3.123.194.221,
                3.64.161.58, 3.73.20.56, 3.65.142.177, 18.158.92.76
              </li>
              <li className="mb-2">
                You can check the following guide if you need help whitelisting
                Binance Futures IPs:
                <br />
                <a
                  href="https://help.wundertrading.com/en/articles/6866348-binance-ip-whitelisting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden underline hover:font-bold md:block"
                >
                  https://help.wundertrading.com/en/
                  <br />
                  articles/6866348-binance-ip-whitelisting
                </a>
                <a
                  href="https://help.wundertrading.com/en/articles/6866348-binance-ip-whitelisting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:font-bold md:hidden"
                >
                  https://help.wundertrading.com/en/
                  <br />
                  articles/6866348-binance-ip-whitelisting
                </a>
              </li>
              <img src={img5} className="md:max-w-5xl mt-7 mb-7" />
              <li className="mb-2">
                Click the checkbox that says “Enable Futures” then click Save
                and that’s it, the API is done.
              </li>
              <img src={img6} className="md:max-w-5xl mt-7 mb-7" />
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold text-red-700 md:text-2xl">
              Only continue further if you have successfully opened your Binance
              Futures account with the API setup
            </h2>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              Create a WunderTrading account
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <li className="mb-2">
                You can use our referral link to get 10% discount on the monthly
                subscription lifetime:
                <br />
                <a
                  href="https://wundertrading.com/en/trader/register?ref=wbt82e47df7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden underline hover:font-bold md:block"
                >
                  https://wundertrading.com/en/trader/register?ref=wbt82e47df7
                </a>
                <a
                  href="https://wundertrading.com/en/trader/register?ref=wbt82e47df7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:font-bold md:hidden"
                >
                  https://wundertrading.com/en/
                  <br />
                  trader/register?ref=wbt82e47df7
                </a>
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              Connect Wundertrading to your Binance account{" "}
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <img src={img7} className="md:max-w-5xl mt-7 mb-7" />
              <li className="mb-2">
                Click on the blue button that says “Connect an exchange”
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              Connecting to the Binance API
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <img src={img8} className="md:max-w-5xl mt-7 mb-7" />
              <li className="mb-2">
                Select on the Exchange Tab the exchange “BINANCE-FUTURES
                (USDT-M)”
              </li>
              <li className="mb-2">
                Give a name to the Wunder Trading Account, for example:
                Binance-Futures-API
              </li>
              <li className="mb-2">
                Paste your API Key saved from Binance in the “API” space
              </li>
              <li className="mb-2">
                Paste your secret key saved from Binance in the “Secret” space
              </li>
              <li className="mb-2">
                Position Mode is “One-Way-Mode”, don't change this!
              </li>
              <li className="mb-2">
                Up to you if you want to set the API as a Favorite
              </li>
              <li className="mb-2">Click on Add and everything is set</li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <ul className="">
              <li className="pt-3 mb-2">
                Wait until WunderTrading detects your Binance account and you
                should see your Binance Futures account balance in your
                Dashboard.
              </li>
              <li className="pt-3 mb-2">
                If your balance isn't showing up after a while, verify you have
                your funds in your Futures account and not in your spot wallet.
              </li>
              <a
                href="https://www.binance.com/en/support/faq/how-to-transfer-funds-to-the-futures-wallet-360033773532"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden underline hover:font-bold md:block"
              >
                https://www.binance.com/en/support/faq/how-to-transfer-funds-to-the-futures-wallet-360033773532
              </a>
              <a
                href="https://www.binance.com/en/support/faq/how-to-transfer-funds-to-the-futures-wallet-360033773532"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:font-bold md:hidden"
              >
                https://www.binance.com/en/support/
                <br />
                faq/how-to-transfer-funds-to-
                <br />
                the-futures-wallet-360033773532
              </a>
              <li className="mb-2 pt-7">
                If you think everything is correct and still isn't showing your
                Binance account try removing the API and creating a new one.
                <li className="pt-3 mb-2">
                  If these measures don’t work, talk to the WunderTrading
                  support or the Crypto Trading Flow support.
                </li>
                <li className="pt-3 mb-2">
                  You can also check the following guides about WunderTrading:
                </li>
                <ul className="hidden w-full ml-4 list-disc md:pl-6 md:block">
                  <li className="mb-2">
                    Introduction
                    <br />
                    <a
                      href="https://wundertrading.com/en/trader/register?ref=wbt82e47df7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://wundertrading.com/en/trader/register?ref=wbt82e47df7
                    </a>
                  </li>
                  <li className="mb-2">
                    Marketplace
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/articles/5179366-marketplace"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/articles/5179366-marketplace
                    </a>
                  </li>
                  <li className="mb-2">
                    Copy-traders
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/articles/5173794-for-copy-traders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/articles/5173794-for-copy-traders
                    </a>
                  </li>
                  <li className="mb-2">
                    Copy-trading FAQ
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/articles/5179416-copy-trading-faq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/articles/5179416-copy-trading-faq
                    </a>
                  </li>
                  <li className="mb-2">
                    Account Subscriptions
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/articles/5173823-account-subscriptions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/articles/5173823-account-subscriptions
                    </a>
                  </li>
                  <li className="mb-2">
                    Common Errors
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/collections/3365728-common-errors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/collections/3365728-common-errors
                    </a>
                  </li>
                  <li className="mb-2">
                    Frequently Asked Questions
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/collections/2910696-faq-frequently-asked-questions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/collections/2910696-faq-frequently-asked-questions
                    </a>
                  </li>
                </ul>
                <ul className="w-full ml-4 list-disc md:pl-6 md:hidden">
                  <li className="mb-2">
                    Introduction
                    <br />
                    <a
                      href="https://wundertrading.com/en/trader/register?ref=wbt82e47df7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://wundertrading.com/en/
                      <br />
                      trader/register?ref=wbt82e47df7
                    </a>
                  </li>
                  <li className="mb-2">
                    Marketplace
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/articles/5179366-marketplace"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/
                      <br />
                      articles/5179366-marketplace
                    </a>
                  </li>
                  <li className="mb-2">
                    Copy-traders
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/articles/5173794-for-copy-traders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/
                      <br />
                      articles/5173794-for-copy-traders
                    </a>
                  </li>
                  <li className="mb-2">
                    Copy-trading FAQ
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/articles/5179416-copy-trading-faq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/
                      <br />
                      articles/5179416-copy-trading-faq
                    </a>
                  </li>
                  <li className="mb-2">
                    Account Subscriptions
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/articles/5173823-account-subscriptions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/
                      <br />
                      articles/5173823-account-subscriptions
                    </a>
                  </li>
                  <li className="mb-2">
                    Common Errors
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/collections/3365728-common-errors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/
                      <br />
                      collections/3365728-common-errors
                    </a>
                  </li>
                  <li className="mb-2">
                    Frequently Asked Questions
                    <br />
                    <a
                      href="https://help.wundertrading.com/en/collections/2910696-faq-frequently-asked-questions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:font-bold"
                    >
                      https://help.wundertrading.com/en/
                      <br />
                      collections/2910696-faq-frequently-asked-questions
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold text-red-700 md:text-2xl">
              Only proceed if you already have your Wundertrading account
              connected to your Binance account
            </h2>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              Configuring your Binance Futures account settings for the BTC/USDT
              pair
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <img src={img9} className="md:max-w-5xl mt-7 mb-7 opacity" />
              <li className="mb-2">
                Under the Derivatives tab select USDⓈ-M Futures
              </li>
              <img src={img10} className="md:max-w-5xl mt-7 mb-7" />
              <li className="mb-2">
                Change your settings to match the settings in the orange box
                shown in the image above
              </li>
              <li className="mb-2">
                Select Isolated Margin Mode and 50x leverage
              </li>
              <li className="mb-2 list-none">
                If you need help with Binance USDⓈ-M Futures Contracts check the
                following link:
                <br />
                <a
                  href=" https://www.binance.com/en/support/faq/crypto-derivatives?c=4&navId=4#18-63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden underline hover:font-bold md:block"
                >
                  https://www.binance.com/en/support/faq/crypto-derivatives?c=4&navId=4#18-63
                </a>
                <a
                  href=" https://www.binance.com/en/support/faq/crypto-derivatives?c=4&navId=4#18-63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:font-bold md:hidden"
                >
                  https://www.binance.com/en/support/
                  <br />
                  faq/crypto-derivatives?c=4&navId=4#18-63
                </a>
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              CTF-BTC Copy-Trading
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <img src={img11} className="md:max-w-5xl mt-7 mb-7 opacity" />
              <li className="mb-2">
                Go to the WunderTrading marketplace and search for Crypto
                Trading Flow
              </li>
              <li className="mb-2">
                You can choose between the Free version and the Pro version
              </li>
              <li className="mb-2">
                You’ll need to have the starter subscription to copy-trade the
                Free version and the pro subscription to copy-trade the Pro
                version
              </li>
            </ul>
          </li>
          <li className="flex items-center justify-center pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl ">
              Everything should be set, welcome to the Crypto Trading Flow
              community!
            </h2>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HowToInstall;
