import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <div>
      <div>========== PropsChildrenPage ==========</div>
      <Example school="다람쥐초등학교">
        {/* Example 컴포넌트에 넣었다가 PropsChildrenPage 컴포넌트로 다시 불러오기 */}
        <div>
          <input type="text" />
          <div>Im Joka!</div>
          <button>ClickMe!</button>
        </div>
      </Example>
      <div>========== PropsChildrenPage ==========</div>
    </div>
  );
}
