import { Card, Checkbox, Rate } from "antd";

function Navbar(){
    const onChange = () => {};
    const renderContent = (type, options) => {
      switch (type) {
        case "text":
          return options.map((option) => <div>{option}</div>);
        case "checkbox":
          return (
            <Checkbox.Group
              style={{
                width: "100%",
                flexDirection: "column",
              }}
              onChange={onChange}
            >
              {options.map((option) => (
                <Checkbox value={option.value}>{option.label}</Checkbox>
              ))}
            </Checkbox.Group>
          );
        case "star":
          return options.map((option) => (
            <>
              <Rate disabled defaultValue={option} />
            </>
          ));
        default:
          break;
      }
    };
    return (
      <>
        <div style={{ width: 200 }}>
          <h3 style={{ fontSize: "22px" }}>Danh mục</h3>
          <span>{renderContent("text", ["Hoa chúc mừng", "Hoa khai trương", "Hoa chia buồn"])}</span>
          <h3>Tìm theo</h3>
          <h4>Giá sản phẩm</h4>
          <span>
            {renderContent("checkbox", [
              { value: "a", label: "A" },
              { value: "b", label: "B" },
            ])}
          </span>
          <h4>Lượt đánh giá</h4>
          <span>{renderContent("star", [3, 4, 5])}</span>
        </div>
      </>
    )
}
export default Navbar;