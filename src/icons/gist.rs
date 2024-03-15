use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct IconGist;

impl Component for IconGist {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <a href="https://gist.github.com/th2ch-g" class="inline-block col-span-1 text-gray-300 transition-all hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="50"
                height="50"
                viewBox="0 0 512 512"
              >
                <path d="M256.075 299.44c-3.792 0-7.485.187-11.19.411-2.457-7.011-3.954-14.696-3.954-23.067 0-8.246 1.459-22.78 3.842-22.806 1.235 0 2.495.112 3.73.112 62.751 0 113.603-50.925 113.603-113.689 0-14.971-6.85-34.371-14.834-42.355l38.961-21.807V.5l-81.291 45.386c-18.051-12.039-36.428-19.113-59.757-19.113-62.752 0-111.956 50.851-111.956 113.603 0 35.306 16.942 66.844 42.205 87.678-7.037 14.771-10.654 31.201-10.654 48.643 0 15.669 3.493 30.553 9.22 44.089-33.023 19.35-54.369 50.039-54.369 84.659 0 58.585 61.093 106.055 136.384 106.055 75.327 0 136.358-47.47 136.358-106.055-.002-58.536-61.008-106.005-136.298-106.005zm-7.573-212.085c29.292 0 53.009 23.729 53.009 52.996 0 29.292-23.717 53.034-53.009 53.034-29.293 0-53.021-23.741-53.021-53.034 0-29.268 23.728-52.996 53.021-52.996zm7.573 358.885c-33.459 0-60.594-18.252-60.594-40.795 0-22.519 27.135-40.771 60.594-40.771 33.46 0 60.595 18.252 60.595 40.771 0 22.543-27.135 40.795-60.595 40.795z" />
              </svg>
            </a>
        }
    }
}