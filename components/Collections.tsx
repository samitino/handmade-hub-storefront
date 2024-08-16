import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5 bg-slate-100">
      <p className="text-heading4-bold sm:text-heading2-bold">
        Shop From Our Collections
      </p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <div className="flex flex-col gap-y-2">
                <Image
                  key={collection._id}
                  src={collection.image}
                  alt={collection.title}
                  width={250}
                  height={200}
                  className="h-[250px] rounded-lg cursor-pointer"
                />
                <span className="capitalize text-center">
                  {collection.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
