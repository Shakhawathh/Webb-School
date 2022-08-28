import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import primaryAxios from "../../Api/primaryAxios";
import Loading from "../Shared/Loading/Loading";

const CourseVideo = () => {
  const { fileName } = useParams();
  const { video } = useParams();
  const [user, loading] = useAuthState(auth);
  const {
    data: myCourse,
    isLoading,
    refetch,
  } = useQuery(["myCourse", user?.email], () =>
    primaryAxios.get(`/mycourse?email=${user?.email}`)
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const courseData = myCourse?.data?.find((allcard) => allcard.video === video);

  const videoData = courseData?.videos.find(
    (allcard) => allcard.fileName === fileName
  );
  return (
    <div>
      <div className="lg:h-96 h-48 md:h-96 w-full border border-neutral">
        {videoData?.vurl ? (
          
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            controls
            light={true}
            url={videoData?.vurl}
            playing
          />
        ) : (
          <div className="w-full h-full bg-base-300">
            <img
              className="mx-auto lg:w-72 md:w-72 w-40"
              src="https://github.com/MShafiMS/admission/blob/gh-pages/output-onlinegiftools%20(1).gif?raw=true"
              alt="error"
            />
            <h1 className="text-xl text-center">
              The module is not cooked yet!
            </h1>
          </div>
        )}
      </div>
      <h1 className="text-3xl my-4">{videoData?.name}</h1>
      <label
        for="my-modal-3"
        className="text-error underline cursor-pointer text-xl modal-button"
      >
        <i className="fa-solid fa-triangle-exclamation mr-3"></i>Copyright
        warning
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <label for="my-modal-3" class="modal cursor-pointer">
      <label className="modal-box relative max-w-4xl text-center bg-[#1E3964] text-[#DBC73D]" for="">
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
        </label>
      </label>
    </div>
  );
};

export default CourseVideo;
