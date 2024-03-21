import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="relative flex min-h-screen pl-3 text-white">
      <div className="flex items-center justify-center w-full prose">
        <ol className="w-full pr-3 md:pl-6">
          {/*  focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg"
           */}

          <li className="pb-3 mt-20 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm md:mt-0 focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 mt-2 text-2xl font-bold">
              How can I contact support?
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <li className="mb-2">
                Send an email to{" "}
                <a
                  href="mailto:support@cryptotradingflow.com?subject=Subject%20Here&body=Message%20Here"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:font-bold"
                >
                  support@cryptotradingflow.com
                </a>
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              What is Crypto Trading Flow?
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <li className="mb-2">
                Crypto Trading Flow is a community trying to benefit from
                automated bots leverage trading cryptocurrencies.
              </li>
              <li className="mb-2">
                We have a variety of trading bots available ranging from free to
                paid with different cryptocurrency pairs.
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              Is there a setup guide to help me get started using a CTF bot?
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <li className="mb-2">
                You can check the Crypto Trading Flow website and follow the
                setup guide we have there at:
                <br />
                <Link
                  to="/HowToInstall"
                  className="hidden underline hover:font-bold md:block"
                >
                  https://www.cryptotradingflow.com/HowToInstall
                </Link>
                <Link
                  to="/HowToInstall"
                  className="underline hover:font-bold md:hidden"
                >
                  https://www.cryptotradingflow.com/
                  <br />
                  HowToInstall
                </Link>
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              What do I need in order to start running a CTF bot?
            </h2>
            <ul className="w-full ml-4 list-disc md:pl-6">
              <li className="mb-2">
                To use our trading bots you'll need a KYC verified Binance
                futures account. If you don't have an account you can use our
                affiliate link for a trading fee discount: <br />
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
                You'll also need an account at Wundertrading, no KYC required.
                If you don't have an account you can use our affiliate link for
                a subscription discount: <br />
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
              What exchanges do you support?
            </h2>
            <ul className="ml-4 list-disc md:pl-6">
              <li className="mb-2">
                Currently we only support Futures Trading on Binance.
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              What's the minimum amount I need to have on my account?
            </h2>
            <ul className="ml-4 list-disc md:pl-6">
              <li className="mb-2">
                You need to have at least 100$ in your Futures account for our
                bots to work.
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              Is there a risk I lose all my money?
            </h2>
            <ul className="ml-4 list-disc md:pl-6">
              <li className="mb-2">
                Yes, although unlikely, that can always happen as the markets
                are always changing and past performance doesn't guarantee
                future results.
              </li>
            </ul>
          </li>
          <li className="pb-3 mb-2 tracking-wider transition duration-150 ease-in-out bg-black shadow-sm focus:bg-gray-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-950 active:shadow-lg px-7 opacity-90 shadow-gray-400/50">
            <h2 className="p-4 text-xl font-bold md:text-2xl">
              Can I change the bot parameters?
            </h2>
            <ul className="ml-4 list-disc md:pl-6">
              <li className="mb-2">
                Changing the bot configurations instead of simply copy-trading
                is not advised and can lead to unexpected loses.
              </li>
              <li className="mb-2">
                Our bots are optimized for the parameters they're working on and
                they shouldn't be changed.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Support;
