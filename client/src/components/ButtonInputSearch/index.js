import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function ButtonInputSearch(props){
    const { size, placeholder, textButton, bordered } = props;
    return (
      <>
        <div style={{ display: "flex", backgroundColor: "#fff" }}>
          <Input size={size} placeholder={placeholder} bordered={bordered} />
          <Button size={size} bordered={bordered} icon={<SearchOutlined />}>
            {textButton}
          </Button>
        </div>
      </>
    );
}
export default ButtonInputSearch;