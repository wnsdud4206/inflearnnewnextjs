import { Component } from "react";

export default class ClassCounterPage extends Component {
  // 함수형 컴포넌트와는 다르게 state를 따로 만들지 않고 state 안에 모든 state를 만듬
  state = {
    count: 0,
  }

  onClickCountUp = (): void => {
    console.log(this.state.count);  // 그냥 실행하면 error button에게 이 함수를 넘겨줄 때 this를 bind 해주거나 이 함수를 애초에 화살표함수로 만들면 error 없이 작동 - 같은 폴더에 this.html 참고
    this.setState({
      count: 1,
    })
  }
  
  render(): JSX.Element {
    return (
      <>
        {/* 여기서 this는 class(ClassCounterPage) 자기자신을 의미한다. 위에 선언된 함수나 변수들은 우리눈엔 안보이지만 this가 생략되어 있는 것이다. 그렇기 때문에 내부의 데이터에 접근을 하려면 this를 사용해야한다. this를 압력하고 render나 setState등 자동입력으로 나오는 것들은 Component에서 상속받은 메소드들인 것이다. */}
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>increase</button>
      </>
    )
  }
}