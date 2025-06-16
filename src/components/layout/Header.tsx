"use client";

import { IoColorPaletteOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { usePaletteStore } from "@/stores/theme.store";

const Header = () => {
  // const [isSans, setIsSans] = useState(true);
  const { setPalette } = usePaletteStore();

  return (
    <header className="p-3 text-center fixed top-0 w-full">
      <h1 className="text-sm font-bold">
        CH.LO<span className="text-muted-foreground">E</span>
      </h1>
      <div className="flex gap-2 justify-center">
        {/* <Button size="icon" variant="link" onClick={() => setIsSans(!isSans)}>
          {isSans ? <RiFontSans /> : <RiFontSansSerif />}
        </Button> */}
        <Button size="icon" variant="link" onClick={setPalette}>
          <IoColorPaletteOutline />
        </Button>
      </div>
    </header>
  );
};

export default Header;
