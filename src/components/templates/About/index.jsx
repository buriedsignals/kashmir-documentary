// Styles
import { AboutTemplateStyle } from "./index.style"
// Hooks
import useStore from "@/hooks/useStore"
// Modules
import HeaderModule from "@/components/modules/Header"
import FrameModule from "@/components/modules/Frame"

export default function AboutTemplate() {
  // Store
  const backgroundImage = useStore((s) => s.backgroundImage)
  return (
    <AboutTemplateStyle>
      <FrameModule noBottom={ true } backgroundImage={ `./images/${ backgroundImage }` }>
        <div className="content-about">
          <div className="content-about-container">
            <h1 className="title">About</h1>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <p className="sub-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lorem nisi ac, maecenas aliquet tortor, lobortis blandit odio. Arcu posuere non diam porta ornare. Sed nulla suspendisse mauris aliquet egestas. Imperdiet ridiculus molestie amet, elit lacinia tellus morbi. Adipiscing molestie magnis vitae dignissim feugiat tortor. Convallis elementum egestas morbi nec sit. A, diam commodo mi leo amet, cursus. Massa tellus integer lectus malesuada est, at nec elit sapien. Aliquam molestie massa mauris vitae sit amet eget fermentum.</p>
            <p className="sub-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lorem nisi ac, maecenas aliquet tortor, lobortis blandit odio. Arcu posuere non diam porta ornare. Sed nulla suspendisse mauris aliquet egestas. Imperdiet ridiculus molestie amet, elit lacinia tellus morbi. Adipiscing molestie magnis vitae dignissim feugiat tortor. Convallis elementum egestas morbi nec sit. A, diam commodo mi leo amet, cursus. Massa tellus integer lectus malesuada est, at nec elit sapien. Aliquam molestie massa mauris vitae sit amet eget fermentum.</p>
            <p className="sub-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lorem nisi ac, maecenas aliquet tortor, lobortis blandit odio. Arcu posuere non diam porta ornare. Sed nulla suspendisse mauris aliquet egestas. Imperdiet ridiculus molestie amet, elit lacinia tellus morbi. Adipiscing molestie magnis vitae dignissim feugiat tortor. Convallis elementum egestas morbi nec sit. A, diam commodo mi leo amet, cursus. Massa tellus integer lectus malesuada est, at nec elit sapien. Aliquam molestie massa mauris vitae sit amet eget fermentum.</p>
            <p className="sub-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lorem nisi ac, maecenas aliquet tortor, lobortis blandit odio. Arcu posuere non diam porta ornare. Sed nulla suspendisse mauris aliquet egestas. Imperdiet ridiculus molestie amet, elit lacinia tellus morbi. Adipiscing molestie magnis vitae dignissim feugiat tortor. Convallis elementum egestas morbi nec sit. A, diam commodo mi leo amet, cursus. Massa tellus integer lectus malesuada est, at nec elit sapien. Aliquam molestie massa mauris vitae sit amet eget fermentum.</p>
            <p className="sub-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lorem nisi ac, maecenas aliquet tortor, lobortis blandit odio. Arcu posuere non diam porta ornare. Sed nulla suspendisse mauris aliquet egestas. Imperdiet ridiculus molestie amet, elit lacinia tellus morbi. Adipiscing molestie magnis vitae dignissim feugiat tortor. Convallis elementum egestas morbi nec sit. A, diam commodo mi leo amet, cursus. Massa tellus integer lectus malesuada est, at nec elit sapien. Aliquam molestie massa mauris vitae sit amet eget fermentum.</p>
            <p className="sub-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lorem nisi ac, maecenas aliquet tortor, lobortis blandit odio. Arcu posuere non diam porta ornare. Sed nulla suspendisse mauris aliquet egestas. Imperdiet ridiculus molestie amet, elit lacinia tellus morbi. Adipiscing molestie magnis vitae dignissim feugiat tortor. Convallis elementum egestas morbi nec sit. A, diam commodo mi leo amet, cursus. Massa tellus integer lectus malesuada est, at nec elit sapien. Aliquam molestie massa mauris vitae sit amet eget fermentum.</p>
            <p className="sub-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lorem nisi ac, maecenas aliquet tortor, lobortis blandit odio. Arcu posuere non diam porta ornare. Sed nulla suspendisse mauris aliquet egestas. Imperdiet ridiculus molestie amet, elit lacinia tellus morbi. Adipiscing molestie magnis vitae dignissim feugiat tortor. Convallis elementum egestas morbi nec sit. A, diam commodo mi leo amet, cursus. Massa tellus integer lectus malesuada est, at nec elit sapien. Aliquam molestie massa mauris vitae sit amet eget fermentum.</p>
            <p className="sub-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lorem nisi ac, maecenas aliquet tortor, lobortis blandit odio. Arcu posuere non diam porta ornare. Sed nulla suspendisse mauris aliquet egestas. Imperdiet ridiculus molestie amet, elit lacinia tellus morbi. Adipiscing molestie magnis vitae dignissim feugiat tortor. Convallis elementum egestas morbi nec sit. A, diam commodo mi leo amet, cursus. Massa tellus integer lectus malesuada est, at nec elit sapien. Aliquam molestie massa mauris vitae sit amet eget fermentum.</p>
          </div>
        </div>
      </FrameModule>
    </AboutTemplateStyle>
  )
}