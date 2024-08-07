use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct IconKaggle;

impl Component for IconKaggle {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <a
                href="https://www.kaggle.com/lst1923"
                class="inline-block col-span-1 text-gray-300 transition-all hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
                    <path
                        d="M25.099 31.812c-.025.12-.156.188-.375.188h-4.183c-.249 0-.468-.109-.656-.328l-6.907-8.787-1.932 1.828v6.817c0 .313-.151.469-.463.469H7.338c-.312 0-.469-.156-.469-.469V.469c0-.308.157-.469.469-.469h3.245c.312 0 .463.161.463.469v19.124l8.271-8.359c.224-.224.443-.328.661-.328h4.319c.192 0 .317.077.38.239.063.199.047.339-.047.417l-8.74 8.459 9.115 11.343c.125.141.156.276.093.48z"
                    />
                </svg>
            </a>
        }
    }
}
