import { GetStayById } from "@/services/stayService";
import { useEffect, useState } from "react";
import Select from "react-select";

function RoomSelectInput({ stayId, onChange, value, isDisabled }) {
  const [stayRooms, setStayRooms] = useState([]);

  useEffect(() => {
    if (!stayId) return;

    GetStayById(stayId).then((res) => {
      setStayRooms(res.data.data.roomTypes);
    });
  }, [stayId]);

  return (
    <Select
      value={{ label: defaultValue, value: defaultValue }}
      isDisabled={isDisabled}
      placeholder="Select Room"
      options={stayRooms?.map((room) => ({ label: room, value: room }))}
      onChange={onChange}
      className="w-full"
    />
  );
}

export default RoomSelectInput;
