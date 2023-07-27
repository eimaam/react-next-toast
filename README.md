# react-next-toast
### 📦 Introducing react-next-toast 🍞
Tired of dealing with complex notification packages or having to spend time building components just to render alerts or toast notificaitons in your React projects? Look no further! Here, I introduce `react-next-toast` 

### 🚀 Why Choose react-next-toast??
- Easy to use: `react-next-toast` was built with ease in mind - say goodbye to complex toast declarations - with react-next-toast you have a toast via a single function call.
- Customizable: With our 4 different types of Toast Notifications - Success, Error, Warning and Info, you get a fine-tuned and different UI display for each which directly passes message from the choice of colour and design. It also provides option to choose duration of toasts, colours and fonts.
- Lightweight: Designed with performance in mind as well, the package is designed to lightweight in other to ensure it does not slow down your app's performance.
- Fully-typed: `react-next-toast` comes with TypeScript support out of the box to provide type safety and seamless renderings.

### 📝 How to Use:
1. Install the package into your project
   
~~~
npm install react-next-toast
~~~

2. Import the `showToast` & use in your Component:

```javascript
import { showToast } from 'react-next-toast';

const MyComponent = () => {

const handleClick = () => {
    showToast.success('Log in successful')
}

return (
    <div>
      <h1>Hello Dev</h1>
      <button onClick={handleClick}>Log in</button>
    </div>
);
}
export default MyComponent;

````
### 💡 Additional Features
You can customize the `duration` of the Toast Notification by passing time in `ms` as second parameter to the `showToast` function.
The default is `5000` which is 5 seconds.

````javascript
const handleClick = () => {
  showToast.error('incorrect login details', 4000)
}
````

#### **NOTE:** _For more advanced customization, you can directly use the ToastNotification component and pass in the required props - duration, position, className._

_Thank you for using `react-next-toast_! 🙏❤️ If you have experience any issues, have any questions or sugestions for improvement, feel free to raise an issue here on GitHub or reach out to me. Your feedback is very vital! ☺:)

_Cheers to toasting to simpler and delightful notes! _🥂 
