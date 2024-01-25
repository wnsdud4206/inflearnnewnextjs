import Router from "next/router";
import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  // 그려지고 난 뒤(render 후)
  componentDidMount(): void {
    console.log("그려지고 나서 실행");
  }

  // 그려지고 난 뒤 변경되고 실행, 리렌더 됐을 때(increase 버튼을 누르면 실행됨)
  componentDidUpdate(): void {
    console.log("변경되고 나서 실행");
  }

  // 그려지고 난 뒤 사라질 때 실행, ex. 채팅방 나가기 API(접속자확인)
  componentWillUnmount(): void {
    console.log("사라지기 전에 실행");
  }
 
  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  onClickMove = (): void => {
    // use가 붙은애들은(hook) 함수형 컴포넌트에서 사용하는 것이고 class component에서는 따로 불러와야한다. 지금은 useRouter를 사용해야하지만 class component기때무니에 next/router에서 Router(default로 내보내는 중)를 import 하여 사용하면 된다.
    void Router.push("/")
  }

  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>increase</button>
        <button onClick={this.onClickMove}>out</button>
      </>
    );
  }
}
