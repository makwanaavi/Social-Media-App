import { BadgeCheck, Heart } from "lucide-react";
import moment from "moment";

const PostCard = ({ post }) => {
  const postWithHashtags = post.content.replace(/(#\w+)/g, '<span class="text-indigo-600 cursor-pointer">$1</span>');
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2xl">
      {/*User Info*/}

      <div className="inline-flex items-center gap-3 cursor-pointer">
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
          <div>
            <Heart className={`w-4 h-4 cursor-pointer`}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
