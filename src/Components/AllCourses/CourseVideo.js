import React from "react";
import { useParams } from "react-router-dom";
import useVideo from "../../Hooks/useVideo";
import ReactPlayer from "react-player";

const CourseVideo = () => {
  const { fileName } = useParams();
  const [video] = useVideo([]);

  const courseData = video.find((allcard) => allcard.fileName === fileName);
  return (
    <div>
      <div className="lg:h-96 h-48 md:h-96 w-full">
      <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              light={true}
              url={courseData?.vurl}
              playing
            />
      </div>
      <h1 className="text-3xl my-4">{courseData?.name}</h1>
      <label
        for="my-modal-3"
        class="text-error underline cursor-pointer text-xl modal-button"
      >
        <i class="fa-solid fa-triangle-exclamation mr-3"></i>Copyright warning
      </label>

      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal text-error">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-error btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-3xl">Disclaimer for Webb School</h1>

          <p>
            If you require any more information or have any questions about our
            site's disclaimer, please feel free to contact us by email at
            webbschool2023@gmail.com. Our Disclaimer was generated with the help
            of the{" "}
            <a href="https://www.disclaimergenerator.net/">
              Free Disclaimer Generator
            </a>
            .
          </p>

          <h2 className="text-xl">Disclaimers for Webb School</h2>

          <p>
            All the information on this website -
            https://webb-school.vercel.app/ - is published in good faith and for
            general information purpose only. Webb School does not make any
            warranties about the completeness, reliability and accuracy of this
            information. Any action you take upon the information you find on
            this website (Webb School), is strictly at your own risk. Webb
            School will not be liable for any losses and/or damages in
            connection with the use of our website.
          </p>

          <p>
            From our website, you can visit other websites by following
            hyperlinks to such external sites. While we strive to provide only
            quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on
            these sites. Site owners and content may change without notice and
            may occur before we have the opportunity to remove a link which may
            have gone 'bad'.
          </p>

          <p>
            Please be also aware that when you leave our website, other sites
            may have different privacy policies and terms which are beyond our
            control. Please be sure to check the Privacy Policies of these sites
            as well as their "Terms of Service" before engaging in any business
            or uploading any information.
          </p>

          <h2 className="text-xl">Consent</h2>

          <p>
            By using our website, you hereby consent to our disclaimer and agree
            to its terms.
          </p>

          <h2 className="text-xl">Update</h2>

          <p>
            Should we update, amend or make any changes to this document, those
            changes will be prominently posted here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;