/* eslint-disable no-unused-vars */
import { BadgeCheck, Heart, MessageCircle, Share2 } from "lucide-react";
import moment from "moment";
import { use, useState } from "react";
import { dummyUserData } from "../assets/assets"; // Assuming you have a dummy user data file
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes_count);
  const currentUser = dummyUserData;

  const postWithHashtags = post.content.replace(
    /(#\w+)/g,
    '<span class="text-indigo-600 cursor-pointer">$1</span>'
  );

  const handleLike = async () => {};

  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2xl">
      {/*User Info*/}

      <div
        className="inline-flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/profile/" + post.user._id)}
      >
        <img
          src={post.user.profile_picture}
          alt="user Profile"
          className="w-10 h-10 rounded-full shadow"
        />

        <div>
          <div className="flex items-center space-x-1">
            <p className="text-sm font-semibold text-gray-800">
              {post.user.full_name}
            </p>
            <BadgeCheck className="w-4 h-4 text-blue-500" />
          </div>

          <div className="text-sm text-gray-500">
            @{post.user.username} · {moment(post.createdAt).fromNow()}
          </div>
        </div>
      </div>
      {/** Post Content */}
      <div>
        {post.content && (
          <div
            className="text-gray-800 text-sm whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: postWithHashtags }}
          />
        )}

        {/*Images*/}

        <div className="grid grid-cols-2 gap-2">
          {post.image_urls.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Post image ${index + 1}`}
              className={`w-full h-48 object-cover rounded-lg ${
                post.image_urls.length === 1 && "col-span-2 h-auto"
              }`}
            />
          ))}
        </div>

        {/*Actions*/}
        <div className="flex items-center gap-4 text-gray-600 text-sm pt-2 border-t border-gray-300">
          <div className="flex items-center gap-1 cursor-pointer">
            <Heart
              onClick={handleLike}
              className={`w-4 h-4 cursor-pointer ${
                likes.includes(currentUser.id) && "text-red-500 fill-red-500"
              }`}
            />
            <span>{likes.length}</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <MessageCircle className={`w-4 h-4 cursor-pointer`} />
            <span>{12}</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <Share2 className={`w-4 h-4 cursor-pointer`} />
            <span>{12}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
