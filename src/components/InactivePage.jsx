function InactivePage({ extensionList }) {
  const filteredList = extensionList.filter((item) => {
    if (!item.isActive) {
      return item;
    }
  });
  return (
    <>
      {filteredList.map((extension) => {
        return (
          <div key={extension.name} className="extension-card">
            <div className="top-part">
              <img src={`./src/${extension.logo}`} alt="" />
              <div className="extension-body">
                <h1 className="extension-header">{extension.name}</h1>
                <p className="extesion-description">{extension.description}</p>
              </div>
            </div>

            <div className="bottom-part">
              <button className=" btn remove-btn">Remove</button>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={extension.isActive}
                  onChange={() => setIsOn(!isOn)}
                />
                <span className="slider" />
              </label>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default InactivePage;
